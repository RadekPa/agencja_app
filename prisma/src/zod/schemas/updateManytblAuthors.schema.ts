import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAuthorsUpdateManyMutationInputObjectSchema as tblAuthorsUpdateManyMutationInputObjectSchema } from './objects/tblAuthorsUpdateManyMutationInput.schema';
import { tblAuthorsWhereInputObjectSchema as tblAuthorsWhereInputObjectSchema } from './objects/tblAuthorsWhereInput.schema';

export const tblAuthorsUpdateManySchema: z.ZodType<Prisma.tblAuthorsUpdateManyArgs> = z.object({ data: tblAuthorsUpdateManyMutationInputObjectSchema, where: tblAuthorsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblAuthorsUpdateManyArgs>;

export const tblAuthorsUpdateManyZodSchema = z.object({ data: tblAuthorsUpdateManyMutationInputObjectSchema, where: tblAuthorsWhereInputObjectSchema.optional() }).strict();