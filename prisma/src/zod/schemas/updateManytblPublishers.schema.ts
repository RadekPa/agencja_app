import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersUpdateManyMutationInputObjectSchema as tblPublishersUpdateManyMutationInputObjectSchema } from './objects/tblPublishersUpdateManyMutationInput.schema';
import { tblPublishersWhereInputObjectSchema as tblPublishersWhereInputObjectSchema } from './objects/tblPublishersWhereInput.schema';

export const tblPublishersUpdateManySchema: z.ZodType<Prisma.tblPublishersUpdateManyArgs> = z.object({ data: tblPublishersUpdateManyMutationInputObjectSchema, where: tblPublishersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPublishersUpdateManyArgs>;

export const tblPublishersUpdateManyZodSchema = z.object({ data: tblPublishersUpdateManyMutationInputObjectSchema, where: tblPublishersWhereInputObjectSchema.optional() }).strict();