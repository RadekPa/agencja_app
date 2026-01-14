import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const tblMailingListsUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateManyMutationInput>;
export const tblMailingListsUpdateManyMutationInputObjectZodSchema = makeSchema();
