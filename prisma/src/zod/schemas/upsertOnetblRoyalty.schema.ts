import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyaltySelectObjectSchema as tblRoyaltySelectObjectSchema } from './objects/tblRoyaltySelect.schema';
import { tblRoyaltyIncludeObjectSchema as tblRoyaltyIncludeObjectSchema } from './objects/tblRoyaltyInclude.schema';
import { tblRoyaltyWhereUniqueInputObjectSchema as tblRoyaltyWhereUniqueInputObjectSchema } from './objects/tblRoyaltyWhereUniqueInput.schema';
import { tblRoyaltyCreateInputObjectSchema as tblRoyaltyCreateInputObjectSchema } from './objects/tblRoyaltyCreateInput.schema';
import { tblRoyaltyUncheckedCreateInputObjectSchema as tblRoyaltyUncheckedCreateInputObjectSchema } from './objects/tblRoyaltyUncheckedCreateInput.schema';
import { tblRoyaltyUpdateInputObjectSchema as tblRoyaltyUpdateInputObjectSchema } from './objects/tblRoyaltyUpdateInput.schema';
import { tblRoyaltyUncheckedUpdateInputObjectSchema as tblRoyaltyUncheckedUpdateInputObjectSchema } from './objects/tblRoyaltyUncheckedUpdateInput.schema';

export const tblRoyaltyUpsertOneSchema: z.ZodType<Prisma.tblRoyaltyUpsertArgs> = z.object({ select: tblRoyaltySelectObjectSchema.optional(), include: tblRoyaltyIncludeObjectSchema.optional(), where: tblRoyaltyWhereUniqueInputObjectSchema, create: z.union([ tblRoyaltyCreateInputObjectSchema, tblRoyaltyUncheckedCreateInputObjectSchema ]), update: z.union([ tblRoyaltyUpdateInputObjectSchema, tblRoyaltyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblRoyaltyUpsertArgs>;

export const tblRoyaltyUpsertOneZodSchema = z.object({ select: tblRoyaltySelectObjectSchema.optional(), include: tblRoyaltyIncludeObjectSchema.optional(), where: tblRoyaltyWhereUniqueInputObjectSchema, create: z.union([ tblRoyaltyCreateInputObjectSchema, tblRoyaltyUncheckedCreateInputObjectSchema ]), update: z.union([ tblRoyaltyUpdateInputObjectSchema, tblRoyaltyUncheckedUpdateInputObjectSchema ]) }).strict();