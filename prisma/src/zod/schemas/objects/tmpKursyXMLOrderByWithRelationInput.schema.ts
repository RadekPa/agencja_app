import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  Id: SortOrderSchema.optional(),
  XMLData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LoadedDateTime: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const tmpKursyXMLOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLOrderByWithRelationInput>;
export const tmpKursyXMLOrderByWithRelationInputObjectZodSchema = makeSchema();
