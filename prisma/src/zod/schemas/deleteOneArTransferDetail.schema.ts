import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransferDetailSelectObjectSchema as ArTransferDetailSelectObjectSchema } from './objects/ArTransferDetailSelect.schema';
import { ArTransferDetailIncludeObjectSchema as ArTransferDetailIncludeObjectSchema } from './objects/ArTransferDetailInclude.schema';
import { ArTransferDetailWhereUniqueInputObjectSchema as ArTransferDetailWhereUniqueInputObjectSchema } from './objects/ArTransferDetailWhereUniqueInput.schema';

export const ArTransferDetailDeleteOneSchema: z.ZodType<Prisma.ArTransferDetailDeleteArgs> = z.object({ select: ArTransferDetailSelectObjectSchema.optional(), include: ArTransferDetailIncludeObjectSchema.optional(), where: ArTransferDetailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransferDetailDeleteArgs>;

export const ArTransferDetailDeleteOneZodSchema = z.object({ select: ArTransferDetailSelectObjectSchema.optional(), include: ArTransferDetailIncludeObjectSchema.optional(), where: ArTransferDetailWhereUniqueInputObjectSchema }).strict();