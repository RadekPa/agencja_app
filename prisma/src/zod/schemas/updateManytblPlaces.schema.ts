import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPlacesUpdateManyMutationInputObjectSchema as tblPlacesUpdateManyMutationInputObjectSchema } from './objects/tblPlacesUpdateManyMutationInput.schema';
import { tblPlacesWhereInputObjectSchema as tblPlacesWhereInputObjectSchema } from './objects/tblPlacesWhereInput.schema';

export const tblPlacesUpdateManySchema: z.ZodType<Prisma.tblPlacesUpdateManyArgs> = z.object({ data: tblPlacesUpdateManyMutationInputObjectSchema, where: tblPlacesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPlacesUpdateManyArgs>;

export const tblPlacesUpdateManyZodSchema = z.object({ data: tblPlacesUpdateManyMutationInputObjectSchema, where: tblPlacesWhereInputObjectSchema.optional() }).strict();