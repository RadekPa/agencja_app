import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string().max(30)
}).strict();
export const tblUserAccessCreateManyTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessCreateManyTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateManyTblPlacesInput>;
export const tblUserAccessCreateManyTblPlacesInputObjectZodSchema = makeSchema();
