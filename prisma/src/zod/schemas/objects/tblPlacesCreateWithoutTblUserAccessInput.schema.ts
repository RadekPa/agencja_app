import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceDesc: z.string().max(50)
}).strict();
export const tblPlacesCreateWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblPlacesCreateWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesCreateWithoutTblUserAccessInput>;
export const tblPlacesCreateWithoutTblUserAccessInputObjectZodSchema = makeSchema();
