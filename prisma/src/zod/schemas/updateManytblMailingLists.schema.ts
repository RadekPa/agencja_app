import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingListsUpdateManyMutationInputObjectSchema as tblMailingListsUpdateManyMutationInputObjectSchema } from './objects/tblMailingListsUpdateManyMutationInput.schema';
import { tblMailingListsWhereInputObjectSchema as tblMailingListsWhereInputObjectSchema } from './objects/tblMailingListsWhereInput.schema';

export const tblMailingListsUpdateManySchema: z.ZodType<Prisma.tblMailingListsUpdateManyArgs> = z.object({ data: tblMailingListsUpdateManyMutationInputObjectSchema, where: tblMailingListsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblMailingListsUpdateManyArgs>;

export const tblMailingListsUpdateManyZodSchema = z.object({ data: tblMailingListsUpdateManyMutationInputObjectSchema, where: tblMailingListsWhereInputObjectSchema.optional() }).strict();