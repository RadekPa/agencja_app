import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyaltySelectObjectSchema as tblRoyaltySelectObjectSchema } from './objects/tblRoyaltySelect.schema';
import { tblRoyaltyIncludeObjectSchema as tblRoyaltyIncludeObjectSchema } from './objects/tblRoyaltyInclude.schema';
import { tblRoyaltyUpdateInputObjectSchema as tblRoyaltyUpdateInputObjectSchema } from './objects/tblRoyaltyUpdateInput.schema';
import { tblRoyaltyUncheckedUpdateInputObjectSchema as tblRoyaltyUncheckedUpdateInputObjectSchema } from './objects/tblRoyaltyUncheckedUpdateInput.schema';
import { tblRoyaltyWhereUniqueInputObjectSchema as tblRoyaltyWhereUniqueInputObjectSchema } from './objects/tblRoyaltyWhereUniqueInput.schema';

export const tblRoyaltyUpdateOneSchema: z.ZodType<Prisma.tblRoyaltyUpdateArgs> = z.object({ select: tblRoyaltySelectObjectSchema.optional(), include: tblRoyaltyIncludeObjectSchema.optional(), data: z.union([tblRoyaltyUpdateInputObjectSchema, tblRoyaltyUncheckedUpdateInputObjectSchema]), where: tblRoyaltyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblRoyaltyUpdateArgs>;

export const tblRoyaltyUpdateOneZodSchema = z.object({ select: tblRoyaltySelectObjectSchema.optional(), include: tblRoyaltyIncludeObjectSchema.optional(), data: z.union([tblRoyaltyUpdateInputObjectSchema, tblRoyaltyUncheckedUpdateInputObjectSchema]), where: tblRoyaltyWhereUniqueInputObjectSchema }).strict();