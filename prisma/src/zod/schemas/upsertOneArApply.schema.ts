import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArApplySelectObjectSchema as ArApplySelectObjectSchema } from './objects/ArApplySelect.schema';
import { ArApplyIncludeObjectSchema as ArApplyIncludeObjectSchema } from './objects/ArApplyInclude.schema';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './objects/ArApplyWhereUniqueInput.schema';
import { ArApplyCreateInputObjectSchema as ArApplyCreateInputObjectSchema } from './objects/ArApplyCreateInput.schema';
import { ArApplyUncheckedCreateInputObjectSchema as ArApplyUncheckedCreateInputObjectSchema } from './objects/ArApplyUncheckedCreateInput.schema';
import { ArApplyUpdateInputObjectSchema as ArApplyUpdateInputObjectSchema } from './objects/ArApplyUpdateInput.schema';
import { ArApplyUncheckedUpdateInputObjectSchema as ArApplyUncheckedUpdateInputObjectSchema } from './objects/ArApplyUncheckedUpdateInput.schema';

export const ArApplyUpsertOneSchema: z.ZodType<Prisma.ArApplyUpsertArgs> = z.object({ select: ArApplySelectObjectSchema.optional(), include: ArApplyIncludeObjectSchema.optional(), where: ArApplyWhereUniqueInputObjectSchema, create: z.union([ ArApplyCreateInputObjectSchema, ArApplyUncheckedCreateInputObjectSchema ]), update: z.union([ ArApplyUpdateInputObjectSchema, ArApplyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ArApplyUpsertArgs>;

export const ArApplyUpsertOneZodSchema = z.object({ select: ArApplySelectObjectSchema.optional(), include: ArApplyIncludeObjectSchema.optional(), where: ArApplyWhereUniqueInputObjectSchema, create: z.union([ ArApplyCreateInputObjectSchema, ArApplyUncheckedCreateInputObjectSchema ]), update: z.union([ ArApplyUpdateInputObjectSchema, ArApplyUncheckedUpdateInputObjectSchema ]) }).strict();