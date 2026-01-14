import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonContractTypeSelectObjectSchema as tblPersonContractTypeSelectObjectSchema } from './objects/tblPersonContractTypeSelect.schema';
import { tblPersonContractTypeWhereUniqueInputObjectSchema as tblPersonContractTypeWhereUniqueInputObjectSchema } from './objects/tblPersonContractTypeWhereUniqueInput.schema';

export const tblPersonContractTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.tblPersonContractTypeFindUniqueOrThrowArgs> = z.object({ select: tblPersonContractTypeSelectObjectSchema.optional(),  where: tblPersonContractTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPersonContractTypeFindUniqueOrThrowArgs>;

export const tblPersonContractTypeFindUniqueOrThrowZodSchema = z.object({ select: tblPersonContractTypeSelectObjectSchema.optional(),  where: tblPersonContractTypeWhereUniqueInputObjectSchema }).strict();