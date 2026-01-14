import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonContractTypeSelectObjectSchema as tblPersonContractTypeSelectObjectSchema } from './objects/tblPersonContractTypeSelect.schema';
import { tblPersonContractTypeCreateInputObjectSchema as tblPersonContractTypeCreateInputObjectSchema } from './objects/tblPersonContractTypeCreateInput.schema';
import { tblPersonContractTypeUncheckedCreateInputObjectSchema as tblPersonContractTypeUncheckedCreateInputObjectSchema } from './objects/tblPersonContractTypeUncheckedCreateInput.schema';

export const tblPersonContractTypeCreateOneSchema: z.ZodType<Prisma.tblPersonContractTypeCreateArgs> = z.object({ select: tblPersonContractTypeSelectObjectSchema.optional(),  data: z.union([tblPersonContractTypeCreateInputObjectSchema, tblPersonContractTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblPersonContractTypeCreateArgs>;

export const tblPersonContractTypeCreateOneZodSchema = z.object({ select: tblPersonContractTypeSelectObjectSchema.optional(),  data: z.union([tblPersonContractTypeCreateInputObjectSchema, tblPersonContractTypeUncheckedCreateInputObjectSchema]) }).strict();