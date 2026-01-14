import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsSelectObjectSchema as sysdiagramsSelectObjectSchema } from './objects/sysdiagramsSelect.schema';
import { sysdiagramsWhereUniqueInputObjectSchema as sysdiagramsWhereUniqueInputObjectSchema } from './objects/sysdiagramsWhereUniqueInput.schema';
import { sysdiagramsCreateInputObjectSchema as sysdiagramsCreateInputObjectSchema } from './objects/sysdiagramsCreateInput.schema';
import { sysdiagramsUncheckedCreateInputObjectSchema as sysdiagramsUncheckedCreateInputObjectSchema } from './objects/sysdiagramsUncheckedCreateInput.schema';
import { sysdiagramsUpdateInputObjectSchema as sysdiagramsUpdateInputObjectSchema } from './objects/sysdiagramsUpdateInput.schema';
import { sysdiagramsUncheckedUpdateInputObjectSchema as sysdiagramsUncheckedUpdateInputObjectSchema } from './objects/sysdiagramsUncheckedUpdateInput.schema';

export const sysdiagramsUpsertOneSchema: z.ZodType<Prisma.sysdiagramsUpsertArgs> = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  where: sysdiagramsWhereUniqueInputObjectSchema, create: z.union([ sysdiagramsCreateInputObjectSchema, sysdiagramsUncheckedCreateInputObjectSchema ]), update: z.union([ sysdiagramsUpdateInputObjectSchema, sysdiagramsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.sysdiagramsUpsertArgs>;

export const sysdiagramsUpsertOneZodSchema = z.object({ select: sysdiagramsSelectObjectSchema.optional(),  where: sysdiagramsWhereUniqueInputObjectSchema, create: z.union([ sysdiagramsCreateInputObjectSchema, sysdiagramsUncheckedCreateInputObjectSchema ]), update: z.union([ sysdiagramsUpdateInputObjectSchema, sysdiagramsUncheckedUpdateInputObjectSchema ]) }).strict();