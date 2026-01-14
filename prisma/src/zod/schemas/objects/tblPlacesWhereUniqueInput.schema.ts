import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.number().int().optional(),
  PlaceDesc: z.string().max(50).optional()
}).strict();
export const tblPlacesWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblPlacesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesWhereUniqueInput>;
export const tblPlacesWhereUniqueInputObjectZodSchema = makeSchema();
