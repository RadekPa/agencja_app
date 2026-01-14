import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessCreateManyTblPlacesInputObjectSchema as tblUserAccessCreateManyTblPlacesInputObjectSchema } from './tblUserAccessCreateManyTblPlacesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblUserAccessCreateManyTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessCreateManyTblPlacesInputObjectSchema).array()])
}).strict();
export const tblUserAccessCreateManyTblPlacesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblUserAccessCreateManyTblPlacesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateManyTblPlacesInputEnvelope>;
export const tblUserAccessCreateManyTblPlacesInputEnvelopeObjectZodSchema = makeSchema();
