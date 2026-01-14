import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonContractTypeCreateManyInputObjectSchema as tblPersonContractTypeCreateManyInputObjectSchema } from './objects/tblPersonContractTypeCreateManyInput.schema';

export const tblPersonContractTypeCreateManySchema: z.ZodType<Prisma.tblPersonContractTypeCreateManyArgs> = z.object({ data: z.union([ tblPersonContractTypeCreateManyInputObjectSchema, z.array(tblPersonContractTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblPersonContractTypeCreateManyArgs>;

export const tblPersonContractTypeCreateManyZodSchema = z.object({ data: z.union([ tblPersonContractTypeCreateManyInputObjectSchema, z.array(tblPersonContractTypeCreateManyInputObjectSchema) ]),  }).strict();