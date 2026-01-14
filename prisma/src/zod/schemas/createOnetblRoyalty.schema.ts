import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyaltySelectObjectSchema as tblRoyaltySelectObjectSchema } from './objects/tblRoyaltySelect.schema';
import { tblRoyaltyIncludeObjectSchema as tblRoyaltyIncludeObjectSchema } from './objects/tblRoyaltyInclude.schema';
import { tblRoyaltyCreateInputObjectSchema as tblRoyaltyCreateInputObjectSchema } from './objects/tblRoyaltyCreateInput.schema';
import { tblRoyaltyUncheckedCreateInputObjectSchema as tblRoyaltyUncheckedCreateInputObjectSchema } from './objects/tblRoyaltyUncheckedCreateInput.schema';

export const tblRoyaltyCreateOneSchema: z.ZodType<Prisma.tblRoyaltyCreateArgs> = z.object({ select: tblRoyaltySelectObjectSchema.optional(), include: tblRoyaltyIncludeObjectSchema.optional(), data: z.union([tblRoyaltyCreateInputObjectSchema, tblRoyaltyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblRoyaltyCreateArgs>;

export const tblRoyaltyCreateOneZodSchema = z.object({ select: tblRoyaltySelectObjectSchema.optional(), include: tblRoyaltyIncludeObjectSchema.optional(), data: z.union([tblRoyaltyCreateInputObjectSchema, tblRoyaltyUncheckedCreateInputObjectSchema]) }).strict();