import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tmpKursyXMLCreateManyInputObjectSchema as tmpKursyXMLCreateManyInputObjectSchema } from './objects/tmpKursyXMLCreateManyInput.schema';

export const tmpKursyXMLCreateManySchema: z.ZodType<Prisma.tmpKursyXMLCreateManyArgs> = z.object({ data: z.union([ tmpKursyXMLCreateManyInputObjectSchema, z.array(tmpKursyXMLCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tmpKursyXMLCreateManyArgs>;

export const tmpKursyXMLCreateManyZodSchema = z.object({ data: z.union([ tmpKursyXMLCreateManyInputObjectSchema, z.array(tmpKursyXMLCreateManyInputObjectSchema) ]),  }).strict();