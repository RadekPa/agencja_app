import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsSelectObjectSchema as sysdiagramsSelectObjectSchema } from './objects/sysdiagramsSelect.schema';
import { sysdiagramsWhereUniqueInputObjectSchema as sysdiagramsWhereUniqueInputObjectSchema } from './objects/sysdiagramsWhereUniqueInput.schema';

export const sysdiagramsDeleteOneSchema: z.ZodType<Prisma.sysdiagramsDeleteArgs> = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  where: sysdiagramsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.sysdiagramsDeleteArgs>;

export const sysdiagramsDeleteOneZodSchema = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  where: sysdiagramsWhereUniqueInputObjectSchema }).strict();