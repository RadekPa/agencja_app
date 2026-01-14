import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransferDetailSelectObjectSchema as ArTransferDetailSelectObjectSchema } from './objects/ArTransferDetailSelect.schema';
import { ArTransferDetailIncludeObjectSchema as ArTransferDetailIncludeObjectSchema } from './objects/ArTransferDetailInclude.schema';
import { ArTransferDetailUpdateInputObjectSchema as ArTransferDetailUpdateInputObjectSchema } from './objects/ArTransferDetailUpdateInput.schema';
import { ArTransferDetailUncheckedUpdateInputObjectSchema as ArTransferDetailUncheckedUpdateInputObjectSchema } from './objects/ArTransferDetailUncheckedUpdateInput.schema';
import { ArTransferDetailWhereUniqueInputObjectSchema as ArTransferDetailWhereUniqueInputObjectSchema } from './objects/ArTransferDetailWhereUniqueInput.schema';

export const ArTransferDetailUpdateOneSchema: z.ZodType<Prisma.ArTransferDetailUpdateArgs> = z.object({ select: ArTransferDetailSelectObjectSchema.optional(), include: ArTransferDetailIncludeObjectSchema.optional(), data: z.union([ArTransferDetailUpdateInputObjectSchema, ArTransferDetailUncheckedUpdateInputObjectSchema]), where: ArTransferDetailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransferDetailUpdateArgs>;

export const ArTransferDetailUpdateOneZodSchema = z.object({ select: ArTransferDetailSelectObjectSchema.optional(), include: ArTransferDetailIncludeObjectSchema.optional(), data: z.union([ArTransferDetailUpdateInputObjectSchema, ArTransferDetailUncheckedUpdateInputObjectSchema]), where: ArTransferDetailWhereUniqueInputObjectSchema }).strict();