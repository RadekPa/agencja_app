import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransferDetailSelectObjectSchema as ArTransferDetailSelectObjectSchema } from './objects/ArTransferDetailSelect.schema';
import { ArTransferDetailIncludeObjectSchema as ArTransferDetailIncludeObjectSchema } from './objects/ArTransferDetailInclude.schema';
import { ArTransferDetailCreateInputObjectSchema as ArTransferDetailCreateInputObjectSchema } from './objects/ArTransferDetailCreateInput.schema';
import { ArTransferDetailUncheckedCreateInputObjectSchema as ArTransferDetailUncheckedCreateInputObjectSchema } from './objects/ArTransferDetailUncheckedCreateInput.schema';

export const ArTransferDetailCreateOneSchema: z.ZodType<Prisma.ArTransferDetailCreateArgs> = z.object({ select: ArTransferDetailSelectObjectSchema.optional(), include: ArTransferDetailIncludeObjectSchema.optional(), data: z.union([ArTransferDetailCreateInputObjectSchema, ArTransferDetailUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ArTransferDetailCreateArgs>;

export const ArTransferDetailCreateOneZodSchema = z.object({ select: ArTransferDetailSelectObjectSchema.optional(), include: ArTransferDetailIncludeObjectSchema.optional(), data: z.union([ArTransferDetailCreateInputObjectSchema, ArTransferDetailUncheckedCreateInputObjectSchema]) }).strict();