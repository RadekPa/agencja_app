import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonContractTypeWhereInputObjectSchema as tblPersonContractTypeWhereInputObjectSchema } from './objects/tblPersonContractTypeWhereInput.schema';

export const tblPersonContractTypeDeleteManySchema: z.ZodType<Prisma.tblPersonContractTypeDeleteManyArgs> = z.object({ where: tblPersonContractTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonContractTypeDeleteManyArgs>;

export const tblPersonContractTypeDeleteManyZodSchema = z.object({ where: tblPersonContractTypeWhereInputObjectSchema.optional() }).strict();