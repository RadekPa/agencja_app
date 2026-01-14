import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.number().int()
}).strict();
export const tblUserAccessCreateManyTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessCreateManyTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateManyTblUsersInput>;
export const tblUserAccessCreateManyTblUsersInputObjectZodSchema = makeSchema();
