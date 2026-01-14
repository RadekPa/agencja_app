import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLUpdateManyMutationInputObjectSchema as tmpKursyXMLUpdateManyMutationInputObjectSchema } from './objects/tmpKursyXMLUpdateManyMutationInput.schema';
import { tmpKursyXMLWhereInputObjectSchema as tmpKursyXMLWhereInputObjectSchema } from './objects/tmpKursyXMLWhereInput.schema';

export const tmpKursyXMLUpdateManySchema: z.ZodType<Prisma.tmpKursyXMLUpdateManyArgs> = z.object({ data: tmpKursyXMLUpdateManyMutationInputObjectSchema, where: tmpKursyXMLWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLUpdateManyArgs>;

export const tmpKursyXMLUpdateManyZodSchema = z.object({ data: tmpKursyXMLUpdateManyMutationInputObjectSchema, where: tmpKursyXMLWhereInputObjectSchema.optional() }).strict();