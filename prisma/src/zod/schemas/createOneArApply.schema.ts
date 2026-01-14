import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArApplySelectObjectSchema as ArApplySelectObjectSchema } from './objects/ArApplySelect.schema';
import { ArApplyIncludeObjectSchema as ArApplyIncludeObjectSchema } from './objects/ArApplyInclude.schema';
import { ArApplyCreateInputObjectSchema as ArApplyCreateInputObjectSchema } from './objects/ArApplyCreateInput.schema';
import { ArApplyUncheckedCreateInputObjectSchema as ArApplyUncheckedCreateInputObjectSchema } from './objects/ArApplyUncheckedCreateInput.schema';

export const ArApplyCreateOneSchema: z.ZodType<Prisma.ArApplyCreateArgs> = z.object({ select: ArApplySelectObjectSchema.optional(), include: ArApplyIncludeObjectSchema.optional(), data: z.union([ArApplyCreateInputObjectSchema, ArApplyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ArApplyCreateArgs>;

export const ArApplyCreateOneZodSchema = z.object({ select: ArApplySelectObjectSchema.optional(), include: ArApplyIncludeObjectSchema.optional(), data: z.union([ArApplyCreateInputObjectSchema, ArApplyUncheckedCreateInputObjectSchema]) }).strict();