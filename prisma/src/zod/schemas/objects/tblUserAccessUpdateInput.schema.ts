import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema as tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema } from './tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInput.schema';
import { tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema as tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema } from './tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInput.schema'

const makeSchema = () => z.object({
  tblPlaces: z.lazy(() => tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema).optional(),
  tblUsers: z.lazy(() => tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema).optional()
}).strict();
export const tblUserAccessUpdateInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpdateInput>;
export const tblUserAccessUpdateInputObjectZodSchema = makeSchema();
