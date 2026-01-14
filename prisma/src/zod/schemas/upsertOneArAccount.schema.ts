import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountSelectObjectSchema as ArAccountSelectObjectSchema } from './objects/ArAccountSelect.schema';
import { ArAccountWhereUniqueInputObjectSchema as ArAccountWhereUniqueInputObjectSchema } from './objects/ArAccountWhereUniqueInput.schema';
import { ArAccountCreateInputObjectSchema as ArAccountCreateInputObjectSchema } from './objects/ArAccountCreateInput.schema';
import { ArAccountUncheckedCreateInputObjectSchema as ArAccountUncheckedCreateInputObjectSchema } from './objects/ArAccountUncheckedCreateInput.schema';
import { ArAccountUpdateInputObjectSchema as ArAccountUpdateInputObjectSchema } from './objects/ArAccountUpdateInput.schema';
import { ArAccountUncheckedUpdateInputObjectSchema as ArAccountUncheckedUpdateInputObjectSchema } from './objects/ArAccountUncheckedUpdateInput.schema';

export const ArAccountUpsertOneSchema: z.ZodType<Prisma.ArAccountUpsertArgs> = z.object({ select: ArAccountSelectObjectSchema.optional(),  where: ArAccountWhereUniqueInputObjectSchema, create: z.union([ ArAccountCreateInputObjectSchema, ArAccountUncheckedCreateInputObjectSchema ]), update: z.union([ ArAccountUpdateInputObjectSchema, ArAccountUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ArAccountUpsertArgs>;

export const ArAccountUpsertOneZodSchema = z.object({ select: ArAccountSelectObjectSchema.optional(),  where: ArAccountWhereUniqueInputObjectSchema, create: z.union([ ArAccountCreateInputObjectSchema, ArAccountUncheckedCreateInputObjectSchema ]), update: z.union([ ArAccountUpdateInputObjectSchema, ArAccountUncheckedUpdateInputObjectSchema ]) }).strict();