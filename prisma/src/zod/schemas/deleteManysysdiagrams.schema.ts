import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsWhereInputObjectSchema as sysdiagramsWhereInputObjectSchema } from './objects/sysdiagramsWhereInput.schema';

export const sysdiagramsDeleteManySchema: z.ZodType<Prisma.sysdiagramsDeleteManyArgs> = z.object({ where: sysdiagramsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.sysdiagramsDeleteManyArgs>;

export const sysdiagramsDeleteManyZodSchema = z.object({ where: sysdiagramsWhereInputObjectSchema.optional() }).strict();