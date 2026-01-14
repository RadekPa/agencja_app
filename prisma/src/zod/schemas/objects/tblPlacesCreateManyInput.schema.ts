import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceDesc: z.string().max(50)
}).strict();
export const tblPlacesCreateManyInputObjectSchema: z.ZodType<Prisma.tblPlacesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesCreateManyInput>;
export const tblPlacesCreateManyInputObjectZodSchema = makeSchema();
