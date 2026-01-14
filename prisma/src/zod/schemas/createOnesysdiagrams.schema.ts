import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsSelectObjectSchema as sysdiagramsSelectObjectSchema } from './objects/sysdiagramsSelect.schema';
import { sysdiagramsCreateInputObjectSchema as sysdiagramsCreateInputObjectSchema } from './objects/sysdiagramsCreateInput.schema';
import { sysdiagramsUncheckedCreateInputObjectSchema as sysdiagramsUncheckedCreateInputObjectSchema } from './objects/sysdiagramsUncheckedCreateInput.schema';

export const sysdiagramsCreateOneSchema: z.ZodType<Prisma.sysdiagramsCreateArgs> = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  data: z.union([sysdiagramsCreateInputObjectSchema, sysdiagramsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.sysdiagramsCreateArgs>;

export const sysdiagramsCreateOneZodSchema = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  data: z.union([sysdiagramsCreateInputObjectSchema, sysdiagramsUncheckedCreateInputObjectSchema]) }).strict();