import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema as tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema } from './tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInput.schema'

const makeSchema = () => z.object({
  tblPlaces: z.lazy(() => tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema).optional()
}).strict();
export const tblUserAccessUpdateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpdateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpdateWithoutTblUsersInput>;
export const tblUserAccessUpdateWithoutTblUsersInputObjectZodSchema = makeSchema();
