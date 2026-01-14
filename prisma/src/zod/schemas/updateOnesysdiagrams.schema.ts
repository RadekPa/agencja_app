import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsSelectObjectSchema as sysdiagramsSelectObjectSchema } from './objects/sysdiagramsSelect.schema';
import { sysdiagramsUpdateInputObjectSchema as sysdiagramsUpdateInputObjectSchema } from './objects/sysdiagramsUpdateInput.schema';
import { sysdiagramsUncheckedUpdateInputObjectSchema as sysdiagramsUncheckedUpdateInputObjectSchema } from './objects/sysdiagramsUncheckedUpdateInput.schema';
import { sysdiagramsWhereUniqueInputObjectSchema as sysdiagramsWhereUniqueInputObjectSchema } from './objects/sysdiagramsWhereUniqueInput.schema';

export const sysdiagramsUpdateOneSchema: z.ZodType<Prisma.sysdiagramsUpdateArgs> = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  data: z.union([sysdiagramsUpdateInputObjectSchema, sysdiagramsUncheckedUpdateInputObjectSchema]), where: sysdiagramsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.sysdiagramsUpdateArgs>;

export const sysdiagramsUpdateOneZodSchema = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  data: z.union([sysdiagramsUpdateInputObjectSchema, sysdiagramsUncheckedUpdateInputObjectSchema]), where: sysdiagramsWhereUniqueInputObjectSchema }).strict();