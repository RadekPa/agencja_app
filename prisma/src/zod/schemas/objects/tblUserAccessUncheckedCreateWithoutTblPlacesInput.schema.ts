import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string()
}).strict();
export const tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessUncheckedCreateWithoutTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUncheckedCreateWithoutTblPlacesInput>;
export const tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectZodSchema = makeSchema();
