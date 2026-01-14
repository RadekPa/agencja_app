import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const tblCustUsersUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpdateManyMutationInput>;
export const tblCustUsersUpdateManyMutationInputObjectZodSchema = makeSchema();
