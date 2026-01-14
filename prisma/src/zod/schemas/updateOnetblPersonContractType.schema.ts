import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonContractTypeSelectObjectSchema as tblPersonContractTypeSelectObjectSchema } from './objects/tblPersonContractTypeSelect.schema';
import { tblPersonContractTypeUpdateInputObjectSchema as tblPersonContractTypeUpdateInputObjectSchema } from './objects/tblPersonContractTypeUpdateInput.schema';
import { tblPersonContractTypeUncheckedUpdateInputObjectSchema as tblPersonContractTypeUncheckedUpdateInputObjectSchema } from './objects/tblPersonContractTypeUncheckedUpdateInput.schema';
import { tblPersonContractTypeWhereUniqueInputObjectSchema as tblPersonContractTypeWhereUniqueInputObjectSchema } from './objects/tblPersonContractTypeWhereUniqueInput.schema';

export const tblPersonContractTypeUpdateOneSchema: z.ZodType<Prisma.tblPersonContractTypeUpdateArgs> = z.object({ select: tblPersonContractTypeSelectObjectSchema.optional(),  data: z.union([tblPersonContractTypeUpdateInputObjectSchema, tblPersonContractTypeUncheckedUpdateInputObjectSchema]), where: tblPersonContractTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPersonContractTypeUpdateArgs>;

export const tblPersonContractTypeUpdateOneZodSchema = z.object({ select: tblPersonContractTypeSelectObjectSchema.optional(),  data: z.union([tblPersonContractTypeUpdateInputObjectSchema, tblPersonContractTypeUncheckedUpdateInputObjectSchema]), where: tblPersonContractTypeWhereUniqueInputObjectSchema }).strict();