import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const tblAgrRightsUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyMutationInput>;
export const tblAgrRightsUpdateManyMutationInputObjectZodSchema = makeSchema();
