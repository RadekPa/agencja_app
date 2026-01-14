import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonContractTypeUpdateManyMutationInputObjectSchema as tblPersonContractTypeUpdateManyMutationInputObjectSchema } from './objects/tblPersonContractTypeUpdateManyMutationInput.schema';
import { tblPersonContractTypeWhereInputObjectSchema as tblPersonContractTypeWhereInputObjectSchema } from './objects/tblPersonContractTypeWhereInput.schema';

export const tblPersonContractTypeUpdateManySchema: z.ZodType<Prisma.tblPersonContractTypeUpdateManyArgs> = z.object({ data: tblPersonContractTypeUpdateManyMutationInputObjectSchema, where: tblPersonContractTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonContractTypeUpdateManyArgs>;

export const tblPersonContractTypeUpdateManyZodSchema = z.object({ data: tblPersonContractTypeUpdateManyMutationInputObjectSchema, where: tblPersonContractTypeWhereInputObjectSchema.optional() }).strict();