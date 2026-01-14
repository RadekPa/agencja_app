import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPlacesWhereInputObjectSchema as tblPlacesWhereInputObjectSchema } from './objects/tblPlacesWhereInput.schema';

export const tblPlacesDeleteManySchema: z.ZodType<Prisma.tblPlacesDeleteManyArgs> = z.object({ where: tblPlacesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPlacesDeleteManyArgs>;

export const tblPlacesDeleteManyZodSchema = z.object({ where: tblPlacesWhereInputObjectSchema.optional() }).strict();