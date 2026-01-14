import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const tblCustTypesUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpdateManyMutationInput>;
export const tblCustTypesUpdateManyMutationInputObjectZodSchema = makeSchema();
