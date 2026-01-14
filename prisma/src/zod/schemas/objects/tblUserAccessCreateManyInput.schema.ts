import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string().max(30),
  PlaceID: z.number().int()
}).strict();
export const tblUserAccessCreateManyInputObjectSchema: z.ZodType<Prisma.tblUserAccessCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateManyInput>;
export const tblUserAccessCreateManyInputObjectZodSchema = makeSchema();
