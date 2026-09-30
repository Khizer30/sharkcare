import { DatabaseModule } from "@database/database.module";
import { HashModule } from "@modules/hash/hash.module";
import { JWTModule } from "@modules/jwt/jwt.module";
import { UserModule } from "@modules/user/user.module";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { ScheduleModule } from "@nestjs/schedule";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { LoggerModule } from "nestjs-pino";

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60000, limit: 100 }]
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env", "../../.env"]
    }),
    LoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const isProduction = configService.get<string>("NODE_ENV") === "production";

        const targets: Array<{ target: string; options?: Record<string, unknown>; level?: string }> = [
          { target: "pino-pretty", options: { singleLine: true, colorize: true } }
        ];

        return {
          pinoHttp: {
            level: configService.get<string>("LOG_LEVEL", "info"),
            ...(isProduction ? {} : { transport: { targets } }),
            redact: ["req.headers.authorization", "req.headers.cookie"],
            autoLogging: true
          }
        };
      }
    }),
    ScheduleModule.forRoot({}),
    JWTModule,
    HashModule,
    DatabaseModule,
    UserModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ]
})
export class AppModule {}
