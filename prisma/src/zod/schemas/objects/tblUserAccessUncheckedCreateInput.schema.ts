import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string().max(30),
  PlaceID: z.number().int()
}).strict();
export const tblUserAccessUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblUserAccessUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUncheckedCreateInput>;
export const tblUserAccessUncheckedCreateInputObjectZodSchema = makeSchema();
