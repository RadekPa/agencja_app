import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesUpdateManyMutationInputObjectSchema as tblTitlesUpdateManyMutationInputObjectSchema } from './objects/tblTitlesUpdateManyMutationInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './objects/tblTitlesWhereInput.schema';

export const tblTitlesUpdateManySchema: z.ZodType<Prisma.tblTitlesUpdateManyArgs> = z.object({ data: tblTitlesUpdateManyMutationInputObjectSchema, where: tblTitlesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTitlesUpdateManyArgs>;

export const tblTitlesUpdateManyZodSchema = z.object({ data: tblTitlesUpdateManyMutationInputObjectSchema, where: tblTitlesWhereInputObjectSchema.optional() }).strict();