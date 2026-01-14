import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserAccessUpdateManyMutationInputObjectSchema as tblUserAccessUpdateManyMutationInputObjectSchema } from './objects/tblUserAccessUpdateManyMutationInput.schema';
import { tblUserAccessWhereInputObjectSchema as tblUserAccessWhereInputObjectSchema } from './objects/tblUserAccessWhereInput.schema';

export const tblUserAccessUpdateManySchema: z.ZodType<Prisma.tblUserAccessUpdateManyArgs> = z.object({ data: tblUserAccessUpdateManyMutationInputObjectSchema, where: tblUserAccessWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblUserAccessUpdateManyArgs>;

export const tblUserAccessUpdateManyZodSchema = z.object({ data: tblUserAccessUpdateManyMutationInputObjectSchema, where: tblUserAccessWhereInputObjectSchema.optional() }).strict();