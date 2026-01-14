import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const tblUserAccessUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpdateManyMutationInput>;
export const tblUserAccessUpdateManyMutationInputObjectZodSchema = makeSchema();
