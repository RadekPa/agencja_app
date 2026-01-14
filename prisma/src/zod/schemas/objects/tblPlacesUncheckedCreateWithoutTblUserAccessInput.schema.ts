import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.number().int().optional(),
  PlaceDesc: z.string()
}).strict();
export const tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblPlacesUncheckedCreateWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUncheckedCreateWithoutTblUserAccessInput>;
export const tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectZodSchema = makeSchema();
