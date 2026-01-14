import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArDefaultAccountSelectObjectSchema as ArDefaultAccountSelectObjectSchema } from './objects/ArDefaultAccountSelect.schema';
import { ArDefaultAccountWhereUniqueInputObjectSchema as ArDefaultAccountWhereUniqueInputObjectSchema } from './objects/ArDefaultAccountWhereUniqueInput.schema';
import { ArDefaultAccountCreateInputObjectSchema as ArDefaultAccountCreateInputObjectSchema } from './objects/ArDefaultAccountCreateInput.schema';
import { ArDefaultAccountUncheckedCreateInputObjectSchema as ArDefaultAccountUncheckedCreateInputObjectSchema } from './objects/ArDefaultAccountUncheckedCreateInput.schema';
import { ArDefaultAccountUpdateInputObjectSchema as ArDefaultAccountUpdateInputObjectSchema } from './objects/ArDefaultAccountUpdateInput.schema';
import { ArDefaultAccountUncheckedUpdateInputObjectSchema as ArDefaultAccountUncheckedUpdateInputObjectSchema } from './objects/ArDefaultAccountUncheckedUpdateInput.schema';

export const ArDefaultAccountUpsertOneSchema: z.ZodType<Prisma.ArDefaultAccountUpsertArgs> = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  where: ArDefaultAccountWhereUniqueInputObjectSchema, create: z.union([ ArDefaultAccountCreateInputObjectSchema, ArDefaultAccountUncheckedCreateInputObjectSchema ]), update: z.union([ ArDefaultAccountUpdateInputObjectSchema, ArDefaultAccountUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountUpsertArgs>;

export const ArDefaultAccountUpsertOneZodSchema = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  where: ArDefaultAccountWhereUniqueInputObjectSchema, create: z.union([ ArDefaultAccountCreateInputObjectSchema, ArDefaultAccountUncheckedCreateInputObjectSchema ]), update: z.union([ ArDefaultAccountUpdateInputObjectSchema, ArDefaultAccountUncheckedUpdateInputObjectSchema ]) }).strict();