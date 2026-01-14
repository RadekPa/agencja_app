import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonContractTypeSelectObjectSchema as tblPersonContractTypeSelectObjectSchema } from './objects/tblPersonContractTypeSelect.schema';
import { tblPersonContractTypeWhereUniqueInputObjectSchema as tblPersonContractTypeWhereUniqueInputObjectSchema } from './objects/tblPersonContractTypeWhereUniqueInput.schema';

export const tblPersonContractTypeFindUniqueSchema: z.ZodType<Prisma.tblPersonContractTypeFindUniqueArgs> = z.object({ select: tblPersonContractTypeSelectObjectSchema.optional(),  where: tblPersonContractTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPersonContractTypeFindUniqueArgs>;

export const tblPersonContractTypeFindUniqueZodSchema = z.object({ select: tblPersonContractTypeSelectObjectSchema.optional(),  where: tblPersonContractTypeWhereUniqueInputObjectSchema }).strict();