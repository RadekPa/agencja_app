import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuthorsUpdateManyMutationInputObjectSchema as tblTitAuthorsUpdateManyMutationInputObjectSchema } from './objects/tblTitAuthorsUpdateManyMutationInput.schema';
import { tblTitAuthorsWhereInputObjectSchema as tblTitAuthorsWhereInputObjectSchema } from './objects/tblTitAuthorsWhereInput.schema';

export const tblTitAuthorsUpdateManySchema: z.ZodType<Prisma.tblTitAuthorsUpdateManyArgs> = z.object({ data: tblTitAuthorsUpdateManyMutationInputObjectSchema, where: tblTitAuthorsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTitAuthorsUpdateManyArgs>;

export const tblTitAuthorsUpdateManyZodSchema = z.object({ data: tblTitAuthorsUpdateManyMutationInputObjectSchema, where: tblTitAuthorsWhereInputObjectSchema.optional() }).strict();