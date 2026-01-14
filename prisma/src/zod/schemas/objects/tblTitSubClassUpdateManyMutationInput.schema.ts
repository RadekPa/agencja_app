import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const tblTitSubClassUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUpdateManyMutationInput>;
export const tblTitSubClassUpdateManyMutationInputObjectZodSchema = makeSchema();
